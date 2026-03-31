import react from 'react'
import './App.css'
import Card from './component/Card'

function App() {
  return (
    <div className="parent">

      <Card
        company="Google"
        posted="10 days ago"
        role="Senior Frontend Developer"
        type="Full-time"
        level="Senior level"
        pay="$120/hr"
        location="California, USA"
        logo="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"
      />

      <Card
        company="Microsoft"
        posted="7 days ago"
        role="React Developer"
        type="Full-time"
        level="Mid level"
        pay="$95/hr"
        location="Redmond, USA"
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s"
      />

      <Card
        company="Amazon"
        posted="5 days ago"
        role="Frontend Engineer"
        type="Contract"
        level="Senior level"
        pay="$110/hr"
        location="Seattle, USA"
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCw9ADW_e3phAevjk1wGYCyOujxGmT_3cTQQ&s"
      />

      <Card
        company="Meta"
        posted="2 days ago"
        role="UI Engineer"
        type="Full-time"
        level="Senior level"
        pay="$130/hr"
        location="Menlo Park, USA"
        logo="https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png"
      />

      <Card
        company="Apple"
        posted="8 days ago"
        role="React Native Developer"
        type="Full-time"
        level="Mid level"
        pay="$125/hr"
        location="Cupertino, USA"
        logo="https://thumbs.dreamstime.com/b/apple-company-logo…le-mobile-laptop-stickers-cups-mugs-182823911.jpg"
      />

      <Card
        company="Netflix"
        posted="3 days ago"
        role="Frontend UI Developer"
        type="Contract"
        level="Senior level"
        pay="$140/hr"
        location="Los Gatos, USA"
        logo="	https://images.icon-icons.com/2699/PNG/512/netflix_logo_icon_170919.png"
      />

      <Card
        company="Adobe"
        posted="6 days ago"
        role="React JS Developer"
        type="Full-time"
        level="Mid level"
        pay="$100/hr"
        location="San Jose, USA"
        logo="https://i.pinimg.com/736x/56/3a/a2/563aa2189ef92dc242a7db5b91078804.jpg"
      />

      <Card
        company="Tesla"
        posted="9 days ago"
        role="Frontend Software Engineer"
        type="Full-time"
        level="Senior level"
        pay="$115/hr"
        location="Texas, USA"
        logo="https://download.logo.wine/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logo.wine.png"
      />

      <Card
        company="IBM"
        posted="4 days ago"
        role="Web Developer"
        type="Full-time"
        level="Junior level"
        pay="$70/hr"
        location="New York, USA"
        logo="https://download.logo.wine/logo/IBM/IBM-Logo.wine.png"
      />

      <Card
        company="Oracle"
        posted="1 day ago"
        role="Frontend Engineer"
        type="Full-time"
        level="Mid level"
        pay="$90/hr"
        location="Austin, USA"
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf_k03KRdC4NkZaZ5esQz8sGlxwBJ-xX9sw&s"
      />

    </div>
  );
}

export default App;
