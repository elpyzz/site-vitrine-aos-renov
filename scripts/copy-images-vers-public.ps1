# Script: remplace les images du site par tes 10 captures (haute qualite)
# 
# 1. Cree le dossier "captures_a_remplacer" a la racine du projet (a cote de package.json)
# 2. Mets-y tes 10 images en les renommant: 1.png, 2.png, 3.png, ... 10.png
#    (Capture 1 -> 1.png, Capture 2 -> 2.png, etc.)
# 3. Lance ce script depuis la racine du projet: .\scripts\copy-images-vers-public.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$sourceDir = Join-Path $root "captures_a_remplacer"
$publicDir = Join-Path $root "public"

if (-not (Test-Path $sourceDir)) {
    New-Item -ItemType Directory -Path $sourceDir -Force | Out-Null
    Write-Host "Dossier cree: captures_a_remplacer"
    Write-Host "Place-y tes 10 images en les nommant 1.png, 2.png, ... 10.png puis relance ce script."
    exit 0
}

# Mapping: Vue d'ensemble=3, Planning=7, Mes Chantiers=6, Devis=8, Facturation=9, Dossiers=10, Estimation=5, Connexion=2
$mapping = @(
    @{ num = 1; dest = "hero-aos-renov.png" },
    @{ num = 2; dest = "app-login.png" },
    @{ num = 3; dest = "app-dashboard.png" },
    @{ num = 5; dest = "app-estimation.png" },
    @{ num = 6; dest = "app-chantiers.png" },
    @{ num = 7; dest = "app-planning.png" },
    @{ num = 8; dest = "app-devis.png" },
    @{ num = 9; dest = "app-facturation.png" },
    @{ num = 10; dest = "app-dossiers.png" }
)

$copied = 0
foreach ($m in $mapping) {
    $src = Join-Path $sourceDir "$($m.num).png"
    if (-not (Test-Path $src)) { $src = Join-Path $sourceDir "$($m.num).png.png" }
    $dst = Join-Path $publicDir $m.dest
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $dst -Force
        Write-Host "OK: $($m.num).png -> public/$($m.dest)"
        $copied++
    }
}

if ($copied -eq 0) {
    Write-Host "Aucune image trouvee dans captures_a_remplacer."
    Write-Host "Nomme tes fichiers: 1.png, 2.png, ... 10.png"
} else {
    Write-Host ""
    Write-Host "Termine: $copied image(s) copiee(s) dans public/. Les anciennes ont ete remplacees."
}
