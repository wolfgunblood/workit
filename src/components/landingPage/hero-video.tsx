
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export function HeroVideoDialogDemo() {
    return (
        <div className="relative">
            <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Jx8O8P_2uZ_F3F8F"
                thumbnailSrc="https://utfs.io/f/81ebe817-47a5-4eea-bec0-bb35cb68de81-4mmh0w.png"
                thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Jx8O8P_2uZ_F3F8F"
                thumbnailSrc="https://utfs.io/f/81ebe817-47a5-4eea-bec0-bb35cb68de81-4mmh0w.png"
                thumbnailAlt="Hero Video"
            />
        </div>
    );
}
