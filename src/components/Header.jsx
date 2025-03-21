import logoImg from '../assets/investment-calculator-logo.png';

export function Header() {
  return (
    <header id="header">
        <img src={logoImg} alt='Logo'/>
      <h1>React Investment Calculator</h1>
    </header>
  );
}