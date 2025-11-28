import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

type AudioContextType = {
	muted: boolean;
	toggleMute: () => void;
	volume: number;
	volumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [muted, setMuted] = useState(false);
	const [volume, setVolume] = useState(1);

	const toggleMute = () => {
		if (audioRef.current) {
			audioRef.current.muted = !muted;
			setMuted(!muted);
		}
	};
	const volumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = Number.parseFloat(event.target.value);
		setVolume(newVolume);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
		}
	};

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const startOnFirstClick = () => {
			audio.play().catch(() => {});
			window.removeEventListener("click", startOnFirstClick);
		};

		window.addEventListener("click", startOnFirstClick);

		return () => window.removeEventListener("click", startOnFirstClick);
	}, []);
	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = volume;
		}
	}, [volume]);

	return (
		<AudioContext.Provider value={{ muted, toggleMute, volume, volumeChange }}>
			<audio ref={audioRef} autoPlay loop preload="auto">
				<source src="/sounds/home/ambient_sound_home.mp3" type="audio/mpeg" />
				<track
					kind="captions"
					src="/subs/home_fr.vtt"
					srcLang="fr"
					label="Français"
				/>
			</audio>

			{children}
		</AudioContext.Provider>
	);
}

export function useAudio() {
	const ctx = useContext(AudioContext);
	if (!ctx) throw new Error("useAudio must be used within AudioProvider");
	return ctx;
}
