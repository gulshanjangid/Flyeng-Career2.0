import Webcam from "react-webcam";
import { RefObject } from "react";

interface WebcamFeedProps {
    webcamRef: RefObject<Webcam>;
    className?: string;
}

export const WebcamFeed = ({ webcamRef, className }: WebcamFeedProps) => {
    return (
        <div className={`relative overflow-hidden rounded-lg bg-black ${className}`}>
            <Webcam
                ref={webcamRef}
                audio={false}
                mirrored={true}
                className="w-full h-full object-cover"
                videoConstraints={{
                    width: 640,
                    height: 480,
                    facingMode: "user"
                }}
            />
        </div>
    );
};
