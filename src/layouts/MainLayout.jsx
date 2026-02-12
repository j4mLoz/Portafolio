import ScrollToTopButton from "../components/ui/ScrollToTopButton";

export default function MainLayout({ children }) {
  return (
    <div className="bg-background relative">
      {children}
      <ScrollToTopButton />
    </div>
  );
}
