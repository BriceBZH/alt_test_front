# 📖 Internal Tools Dashboard

## 🚀 Quick Start
**Installation et lancement :**  
```bash
# Installer les dépendances
npm install

# Lancer l'application en développement
npm run dev
```

## 🏗️ Architecture
**Structure projet :** 
```bash
src/
  pages/
    Dashboard.jsx
    Tools.jsx
    Analytics.jsx
    Settings.jsx
  components/
    App.jsx
    Filters.jsx
    Header.jsx
    Kpis.jsx
    main.jsx
    Modals.jsx
    Navbar.jsx
    Notifications.jsx
    RecentTools.jsx
    SearchBar.jsx
    ToolsTable.jsx
  assets/
    images
  styles/
    App.css
    index.css
```

### **🎨 Design System Evolution**

```bash
J'ai commencé par divisé la page principale en plusieurs composants pour être réutilisable et j\'ai appliqué la couleur de fond et la couleur de texte partout, puis j'ai géré le responsive. Je design est encore minimal.
```

### **🔗 Navigation & User Journey**

```bash
La page principale de l\'application était dashboard, l'utilisateur navigue à partir de là. Sachant que la seule page en plus est la page Tools, l'utilisateur peut naviguer entre les deux.
```

### **📊 Data Integration Strategy**

```bash
Les données proviennent d'un JSON pour la page tools, j'y ai ajouté la mise en place de filtres pour gérer l'affichage dynamique, ainsi que la possibilité d'ajouter des entrées via une modal.
```

### **📱 Progressive Responsive Design**

```bash
J’ai adopté une approche mobile-first, avec des containers flexibles et des classes Bootstrap. Certaines pages sont déjà responsives, mais toutes les adaptations pour tablettes et desktop ne sont pas finalisées.
```

### **🧪 Testing Strategy**

```bash
Pour l’instant, aucun test automatisé n’est en place. J’ai testé manuellement les composants principaux (ToolsTable, Filters, Modal) pour vérifier que les interactions fonctionnent. L’idée serait d’ajouter des tests unitaires avec Jest + React Testing Library par la suite.
```

### **⚡ Performance Optimizations**

```bash
L’application est légère (React + JSON server), et j’ai limité les rendus inutiles en utilisant des useEffect correctement. Les composants sont fonctionnels et réutilisables, mais aucune optimisation avancée comme le lazy loading n’a encore été implémentée.
```

### **🎯 Design Consistency Approach**

```bash
J’ai maintenu une cohérence visuelle en utilisant un thème commun (couleurs, typographie, espacement) et des composants réutilisables pour boutons, cards, tables et modals. Même sans mockups, j’ai suivi les mêmes règles sur toutes les pages.
```

### **📈 Data Visualization Philosophy**

```bash
Pour l’instant, aucune librairie de graphiques n’est intégrée, mais le plan est d’utiliser Chart.js ou Recharts pour afficher les données de manière claire et cohérente avec le design system existant.
```

### **🔮 Next Steps / Complete App Vision**

```bash
La barre de recherche, les dropdowns et les tris par colonnes ne sont pas encore fonctionnels.
Certaines couleurs de background doivent être ajustées pour correspondre au design final.
La page Analytics n’est pas encore implémentée.
Plusieurs fonctionnalités restent à développer pour obtenir une application complète et cohérente.
```