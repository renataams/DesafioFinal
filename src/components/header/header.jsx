// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Scss from './header.module.scss'
import Logo from '../../assets/logo.png';
import Search from '../../assets/search.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
/* BrowserRouter, Routes, Route, Link */
export default function Header() {
    return (

        <header>
            <section className={Scss.boxLivros}>
                <img src={Logo} alt="Logo Livros" />
                <h1>Livros Vai na Web</h1>
            </section>
        <nav>
            <ul>
                <li>Início</li>
                <li>Livros Doados</li>
                <li>Quero Doar</li>
            </ul>
        </nav>
        <section className={Scss.barraDeBusca}>
                    <input type="search" name="" id="" placeholder='O que você procura?'/>
                    <button><img src={Search} alt="Imagem de lupa branca" /></button>
                </section>
        </header>
    );
}