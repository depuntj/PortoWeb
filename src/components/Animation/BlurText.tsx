import { useRef, useEffect, useState } from "react";

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
}

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (inView && onAnimationComplete) {
      // Calculate total animation duration
      const totalDuration = elements.length * delay + 500; // 500ms buffer
      timeout = setTimeout(() => {
        onAnimationComplete();
      }, totalDuration);
    }
    return () => clearTimeout(timeout);
  }, [inView, elements.length, delay, onAnimationComplete]);

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
      {elements.map((element, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ease-out ${
            inView
              ? "opacity-100 blur-none transform-none"
              : "opacity-0 blur-lg transform " +
                (direction === "top" ? "-translate-y-10" : "translate-y-10")
          }`}
          style={{
            transitionDelay: `${index * delay}ms`,
          }}
        >
          {element === " " ? "\u00A0" : element}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </span>
      ))}
    </p>
  );
};

export default BlurText;
