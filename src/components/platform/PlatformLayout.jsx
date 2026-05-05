import PlatformNavbar from "./PlatformNavbar";
import Container from "../Container";

export default function PlatformLayout({ children, title, breadcrumb }) {
  return (
    <div className="min-h-screen flex flex-col bg-ink-50">
      <PlatformNavbar />

      {/* Page header breadcrumb */}
      {(title || breadcrumb) && (
        <div className="bg-ink-800 border-b border-white/10">
          <Container className="py-3">
            {breadcrumb && (
              <p className="text-xs text-white/50 mb-0.5">{breadcrumb}</p>
            )}
            {title && (
              <h1 className="text-base font-semibold text-white">{title}</h1>
            )}
          </Container>
        </div>
      )}

      <main className="flex-1">
        <Container className="py-6 sm:py-8">{children}</Container>
      </main>

      {/* Minimal platform footer */}
      <footer className="border-t border-ink-200 bg-white">
        <Container className="py-3 flex items-center justify-between text-xs text-ink-400">
          <p>© {new Date().getFullYear()} Bharat Vikas Parishad. All rights reserved.</p>
          <a href="/" className="hover:text-ink-700 font-medium transition-colors">
            ← Back to main site
          </a>
        </Container>
      </footer>
    </div>
  );
}
