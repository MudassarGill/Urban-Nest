@echo off

REM ---- folders ----
mkdir src\components src\pages src\context src\data src\assets\images src\assets\videos 2>nul

REM ---- components (17) ----
for %%n in (Layout Navbar Footer ScrollToTop Hero SearchBar PropertyTypeCard PropertyCard FeatureItem AgentCard CallToAction SectionHeading PageBanner PropertyFilters FavoriteButton EmptyState FormField) do (
  (
    echo function %%n^(^) {
    echo   return ^<div^>%%n^</div^>;
    echo }
    echo.
    echo export default %%n;
  ) > src\components\%%n.jsx
)

REM ---- pages (10) ----
for %%n in (Home Properties PropertyDetail Agents About Contact Login Signup Favorites NotFound) do (
  (
    echo function %%n^(^) {
    echo   return ^<div^>%%n page^</div^>;
    echo }
    echo.
    echo export default %%n;
  ) > src\pages\%%n.jsx
)

REM ---- data aur context (khali files) ----
type nul > src\data\properties.js
type nul > src\data\agents.js
type nul > src\context\FavoritesContext.jsx

REM ---- Vite ki faltu files hatao ----
del src\App.css 2>nul
del src\assets\react.svg 2>nul
del public\vite.svg 2>nul

echo.
echo Done! Folders aur files ban gayi.