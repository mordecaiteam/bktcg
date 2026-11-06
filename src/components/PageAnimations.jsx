import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageAnimations() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (pathname === "/") return;
    const main = document.querySelector("main");
    if (!main) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;
    const tracked = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.dataset.motionState = "visible";
          observer.unobserve(target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });

    const register = () => {
      main.querySelectorAll("[data-page-motion]").forEach((target) => {
        if (tracked.has(target)) return;
        tracked.add(target);
        target.dataset.motionState = "pending";
        observer.observe(target);
      });
      tracked.forEach((target) => {
        if (!main.contains(target)) {
          observer.unobserve(target);
          tracked.delete(target);
        }
      });
    };
    register();
    // Event tabs can add fresh cards without changing routes.
    const mutations = new MutationObserver(register);
    mutations.observe(main, { childList: true, subtree: true });
    const showAll = () => {
      if (motion.matches) {
        mutations.disconnect();
        observer.disconnect();
        tracked.forEach((target) => { target.dataset.motionState = "visible"; });
      }
    };
    motion.addEventListener("change", showAll);
    return () => {
      mutations.disconnect();
      observer.disconnect();
      motion.removeEventListener("change", showAll);
      tracked.forEach((target) => { delete target.dataset.motionState; });
    };
  }, [pathname]);

  return null;
}
