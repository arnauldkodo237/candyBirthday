# Surprise romantique

Cette page est pensée pour être déployée en simple site statique, sans framework ni dépendance de build.

## Hébergement sur GitHub Pages

1. Pousse ce dossier dans un dépôt GitHub.
2. Dans le dépôt : Settings > Pages.
3. Source : GitHub Actions.
4. Valide le workflow.
5. GitHub Pages génère ensuite un lien du type :
   https://<votre-utilisateur>.github.io/<nom-du-repo>/

## Fichiers principaux

- `index.html`
- `style.css`
- `script.js`

## Vérification locale

Ouvrez simplement `index.html` dans le navigateur, ou lancez un petit serveur local :

```bash
python -m http.server 8000
```

Puis ouvrez : http://localhost:8000
