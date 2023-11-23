import React, { Fragment, useEffect, useRef } from "react";

function Home() {
    useEffect(() => {
        console.log("Hello World!")
    }, []);

    return (
        <Fragment>
            <header role="banner">
                <div id="acces_rapides" className="container">
                    <ul className="nav" aria-label="Accès rapide">
                        <li className="nav-item">
                            <a className="btn btn-primary" href="#contenuPage">
                                Aller au contenu
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-primary hidden-xs" href="#search">
                                Aller à la recherche
                            </a>
                            <button className="btn btn-primary visible-xs w-100 searchButton">
                                Aller à la recherche
                            </button>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-primary hidden-xs" href="#myNavbar">
                                Aller au menu
                            </a>
                            <button
                                className="btn btn-primary visible-xs w-100 menuButton"
                                data-toggle="modal"
                                data-target="#myNavbar-mobile"
                                aria-expanded="false"
                            >
                                Aller au menu
                            </button>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-primary" href="#footerPage">
                                Aller au pied de page
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="fixed-top" id="fixed-top_modal-mobile">
                    <div className="modal" id="myNavbar-mobile" tabIndex={-1} role="dialog">
                        <div role="document">
                            <div id="content-menu-mobile">
                                <div className="text-right">
                                    <button
                                        aria-controls="myNavbar"
                                        aria-expanded="false"
                                        aria-label="Basculer le menu"
                                        className="btn-menu btn-menu-close"
                                        data-target="#myNavbar-mobile"
                                        data-toggle="modal"
                                        type="button"
                                    >
                                        Fermer{" "}
                                        <img
                                            alt="Fermer"
                                            src="/portail/modules/recouvcommon/img/icones/close_blue.svg"
                                        />
                                    </button>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <div className="recherche-simple">
                                                <form
                                                    role="search"
                                                    method="get"
                                                    name="searchForm"
                                                    action="/portail/home/resultats-de-recherche.html"
                                                    className="form-inline ui-front"
                                                >
                                                    <input
                                                        type="hidden"
                                                        name="jcrMethodToCall"
                                                        defaultValue="get"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="src_originSiteKey"
                                                        defaultValue="urssaf"
                                                    />
                                                    <input
                                                        name="src_pagePath.value"
                                                        id="src_pagePath_value"
                                                        type="hidden"
                                                        defaultValue="/sites/urssaf/home"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="src_pagePath.includeChildren"
                                                        defaultValue="true"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="src_sites.values"
                                                        defaultValue="urssaf"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="src_sitesForReferences.values"
                                                        defaultValue="systemsite"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="src_languages.values"
                                                        defaultValue="fr"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="src_itemsPerPage"
                                                        defaultValue={10}
                                                    />
                                                    <input
                                                        name="jcrMethodToCall"
                                                        defaultValue="get"
                                                        type="hidden"
                                                    />
                                                    <input
                                                        name="src_originSiteKey"
                                                        defaultValue="urssaf"
                                                        type="hidden"
                                                    />
                                                    <input
                                                        name="src_terms[0].applyFilter"
                                                        defaultValue="true"
                                                        type="hidden"
                                                    />
                                                    <input
                                                        name="src_terms[0].match"
                                                        defaultValue="all_words"
                                                        className="termMatch"
                                                        type="hidden"
                                                    />
                                                    <input
                                                        name="src_terms[0].fields.siteContent"
                                                        defaultValue="true"
                                                        type="hidden"
                                                    />
                                                    <input
                                                        name="src_terms[0].fields.tags"
                                                        defaultValue="true"
                                                        type="hidden"
                                                    />
                                                    <input
                                                        name="src_terms[0].fields.keywords"
                                                        defaultValue="true"
                                                        type="hidden"
                                                    />
                                                    <input
                                                        id="searchMobile"
                                                        onfocus="if(this.value=='')this.value='';"
                                                        onblur="if(this.value=='')this.value='';"
                                                        placeholder="Que cherchez-vous ?"
                                                        title="Que cherchez-vous ?"
                                                        aria-label="Que cherchez-vous ?"
                                                        name="src_terms[0].term"
                                                        className="advancedSearchTerm autoCompleteSearch form-control ui-autocomplete-input"
                                                        defaultValue=""
                                                        type="text"
                                                        autoComplete="off"
                                                    />
                                                    <span
                                                        role="status"
                                                        aria-live="polite"
                                                        className="ui-helper-hidden-accessible"
                                                    />
                                                    <button type="submit" className="btn OK_inline">
                                                        OK
                                                    </button>
                                                    <ul
                                                        className="ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all"
                                                        id="ui-id-1"
                                                        tabIndex={0}
                                                        style={{ zIndex: 1051, display: "none" }}
                                                    />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav role="navigation" aria-label="Menu principal">
                                    <ul className="nav">
                                        <li className=" dropdown">
                                            <div className="dropdown-area">
                                                <a
                                                    className="dropdown-toggle"
                                                    href="/portail/home/entreprise-espace.html"
                                                >
                                                    Employeur
                                                </a>
                                                <button
                                                    type="button"
                                                    className="dropdown-toggle level1"
                                                    data-toggle="collapse"
                                                    data-target="#menu-mobile-entreprise-espace"
                                                    aria-expanded="false"
                                                >
                                                    <img
                                                        alt="Basculer le menu"
                                                        src="/portail/modules/recouvcommon/img/icones/chevron-bottom.svg"
                                                    />
                                                </button>
                                            </div>
                                            <div
                                                id="menu-mobile-entreprise-espace"
                                                className="dropdown-smenu collapse "
                                            >
                                                <div>
                                                    <ul className="nav">
                                                        <li>
                                                            <a href="/portail/home/employeur.html">Entreprise</a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/employeur-du-secteur-des-service.html">
                                                                Employeur du secteur des services à la personne
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/administration-et-collectivite-t.html">
                                                                Administration et collectivité territoriale
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/artiste-du-spectacle-mannequin.html">
                                                                Artiste du spectacle, mannequin
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/espaces-dedies/entreprise-du-secteur-pharmaceut.html">
                                                                Entreprise du secteur pharmaceutique
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/espaces-dedies/taxe-de-solidarite-additionnelle.html">
                                                                Taxe de solidarité additionnelle
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/espaces-dedies/employeur-du-secteur-des-ieg.html">
                                                                Employeur du secteur des IEG
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/espaces-dedies/obligation-demploi-des-travaille.html">
                                                                Obligation d’emploi des travailleurs handicapés
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/c3s">
                                                                Contribution sociale de solidarité des sociétés
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/cfpta">
                                                                Contributions de formation professionnelle et taxe
                                                                d’apprentissage
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/firme-etrangere">
                                                                Entreprise étrangère sans établissement en France
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/employeur-du-notariat.html">
                                                                Employeur du notariat
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/outre-mer/employeur.html">
                                                                Employeur de lOutre-mer
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=" dropdown">
                                            <div className="dropdown-area">
                                                <a
                                                    className="dropdown-toggle"
                                                    href="/portail/home/independant-espace.html"
                                                >
                                                    Indépendant
                                                </a>
                                                <button
                                                    type="button"
                                                    className="dropdown-toggle level1"
                                                    data-toggle="collapse"
                                                    data-target="#menu-mobile-independant-espace"
                                                    aria-expanded="false"
                                                >
                                                    <img
                                                        alt="Basculer le menu"
                                                        src="/portail/modules/recouvcommon/img/icones/chevron-bottom.svg"
                                                    />
                                                </button>
                                            </div>
                                            <div
                                                id="menu-mobile-independant-espace"
                                                className="dropdown-smenu collapse  secondOnglet "
                                            >
                                                <div>
                                                    <ul className="nav">
                                                        <li>
                                                            <a href="/portail/home/independant.html">
                                                                Profession libérale réglementée
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/artisan-commercant.html">
                                                                Artisan, commerçant ou profession libérale non
                                                                réglementée
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/praticien-et-auxiliaire-medical.html">
                                                                Praticien auxiliaire médical
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/auto-entrepreneur.html">
                                                                Autoentrepreneur
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/espaces-dedies/vrp-multicarte.html">
                                                                VRP multicarte
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/outre-mer/independant.html">
                                                                Indépendant de lOutre-mer
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=" dropdown">
                                            <div className="dropdown-area">
                                                <a
                                                    className="dropdown-toggle"
                                                    href="/portail/home/particulier-espace.html"
                                                >
                                                    Particulier
                                                </a>
                                                <button
                                                    type="button"
                                                    className="dropdown-toggle level1"
                                                    data-toggle="collapse"
                                                    data-target="#menu-mobile-particulier-espace"
                                                    aria-expanded="false"
                                                >
                                                    <img
                                                        alt="Basculer le menu"
                                                        src="/portail/modules/recouvcommon/img/icones/chevron-bottom.svg"
                                                    />
                                                </button>
                                            </div>
                                            <div
                                                id="menu-mobile-particulier-espace"
                                                className="dropdown-smenu collapse  secondOnglet "
                                            >
                                                <div>
                                                    <ul className="nav">
                                                        <li>
                                                            <a href="/portail/home/services-a-la-personne.html">
                                                                Services à la personne
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/espaces-dedies/le-frontalier-en-suisse.html">
                                                                Frontalier en Suisse
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/espaces-dedies/beneficiaire-de-la-puma.html">
                                                                Bénéficiaires de la PUMa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/espaces-dedies/activites-relevant-de-leconomie.html">
                                                                Activités relevant de léconomie collaborative
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/portail/home/outre-mer/particulier-employeur.html">
                                                                Particulier employeur de lOutre-mer
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="/portail/home/decouvrir-lurssaf.html">
                                                Découvrir lUrssaf
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed-top">
                    {" "}
                    <div className="header-top">
                        <div className="container">
                            <div className="row header">

                                <div className="col-xs-12" id="header-menu-top">
                                    <nav className="MenuHaut">
                                        <div>
                                            <div className="row">
                                                <ul className=" main-menu-header">
                                                    <li
                                                        className="notConnectedPart"
                                                        id="notConnectedPartCreation"
                                                    >
                                                        <a href="/portail/home/creer-votre-espace.html">
                                                            Créez votre espace en ligne
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="notConnectedPart"
                                                        id="notConnectedPartSeConnecter"
                                                    >
                                                        <a href="/portail/portail/home/connectez-vous.html">
                                                            <img
                                                                className="hidden-xs"
                                                                src="/portail/modules/urssafLogin/img/user.svg"
                                                                alt=""
                                                            />
                                                            Connectez-vous
                                                        </a>
                                                    </li>
                                                    <li className="connectedPart hidden-xs">
                                                        <p>Vous êtes connecté à votre espace personnel</p>
                                                    </li>
                                                    <li
                                                        className="connectedPart"
                                                        id="connectedPartEspacePersonnel"
                                                    >
                                                        <button
                                                            data-toggle="collapse"
                                                            data-target="#connectedPartEspacePersonnelContent"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="loginName" />
                                                            <img
                                                                alt=""
                                                                src="/portail/modules/urssafLogin/img/carret-down.svg"
                                                            />
                                                            {/* 	</a> */}
                                                        </button>
                                                        <div
                                                            id="connectedPartEspacePersonnelContent"
                                                            className="collapse"
                                                        >
                                                            <div>
                                                                <ul>
                                                                    <li>
                                                                        <p>
                                                                            <span className="loginName" />
                                                                            <br />
                                                                            <span className="siretNumber" />
                                                                        </p>
                                                                        <a
                                                                            className="logout"
                                                                            href="https://mon.urssaf.fr/uncnx"
                                                                        >
                                                                            <img
                                                                                src="/portail/modules/urssafLogin/img/power.svg"
                                                                                alt="Se déconnecter"
                                                                            />
                                                                        </a>
                                                                    </li>
                                                                    <li className="">
                                                                        <a href="#" id="retour-mes-services">
                                                                            Retour vers mes services
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                    <div className="clear" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-6 col-sm-4">
                                    <a
                                        className="navbar-brand"
                                        href="/portail/home.html"
                                        target="_self"
                                        title="URSSAF - Accueil"
                                    >
                                        <img
                                            src="/portail/files/live/sites/urssaf/files/Logos/logo.svg"
                                            alt="URSSAF - Accueil"
                                        />
                                    </a>
                                </div>
                                {/* <div class="col-xs-9 "> */}
                                {/* 	<button type="button" class="navbar-toggle btn-search pull-left" data-toggle="collapse" data-target="#mySearch"> */}
                                {/* 	</button> */}
                                {/* </div> */}
                                <div className="col-xs-6 col-sm-8 main-menu">
                                    <button
                                        type="button"
                                        className="navbar-toggle btn-menu pull-left visible-xs"
                                        data-toggle="modal"
                                        data-target="#myNavbar-mobile"
                                        aria-expanded="false"
                                    >
                                        Menu{" "}
                                        <img
                                            src="/portail/modules/recouvcommon/img/icones/menu-right.svg"
                                            alt=""
                                        />
                                    </button>
                                    <nav aria-label="Menu principal" role="navigation">
                                        <ul
                                            className="nav navbar-nav collapse navbar-collapse"
                                            tabIndex={-1}
                                            id="myNavbar"
                                        >
                                            <li className=" dropdown">
                                                <a
                                                    className="dropdown-toggle clickAndLightbox"
                                                    href="/portail/home/entreprise-espace.html"
                                                >
                                                    Employeur
                                                </a>
                                                <div className="dropdown-smenu  col13">
                                                    <div className="leftPart">
                                                        <ul>
                                                            <li>
                                                                <a href="/portail/home/employeur.html">Entreprise</a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/employeur-du-secteur-des-service.html">
                                                                    Employeur du secteur des services à la personne
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/administration-et-collectivite-t.html">
                                                                    Administration et collectivité territoriale
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/artiste-du-spectacle-mannequin.html">
                                                                    Artiste du spectacle, mannequin
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/espaces-dedies/entreprise-du-secteur-pharmaceut.html">
                                                                    Entreprise du secteur pharmaceutique
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/espaces-dedies/taxe-de-solidarite-additionnelle.html">
                                                                    Taxe de solidarité additionnelle
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/espaces-dedies/employeur-du-secteur-des-ieg.html">
                                                                    Employeur du secteur des IEG
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/espaces-dedies/obligation-demploi-des-travaille.html">
                                                                    Obligation d’emploi des travailleurs handicapés
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/c3s">
                                                                    Contribution sociale de solidarité des sociétés
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/cfpta">
                                                                    Contributions de formation professionnelle et taxe
                                                                    d’apprentissage
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/firme-etrangere">
                                                                    Entreprise étrangère sans établissement en France
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/employeur-du-notariat.html">
                                                                    Employeur du notariat
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/outre-mer/employeur.html">
                                                                    Employeur de lOutre-mer
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className=" dropdown">
                                                <a
                                                    className="dropdown-toggle clickAndLightbox"
                                                    href="/portail/home/independant-espace.html"
                                                >
                                                    Indépendant
                                                </a>
                                                <div className="dropdown-smenu  secondOnglet  col6">
                                                    <div className="leftPart">
                                                        <ul>
                                                            <li>
                                                                <a href="/portail/home/independant.html">
                                                                    Profession libérale réglementée
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/artisan-commercant.html">
                                                                    Artisan, commerçant ou profession libérale non
                                                                    réglementée
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/praticien-et-auxiliaire-medical.html">
                                                                    Praticien auxiliaire médical
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/auto-entrepreneur.html">
                                                                    Autoentrepreneur
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/espaces-dedies/vrp-multicarte.html">
                                                                    VRP multicarte
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/outre-mer/independant.html">
                                                                    Indépendant de lOutre-mer
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className=" dropdown">
                                                <a
                                                    className="dropdown-toggle clickAndLightbox"
                                                    href="/portail/home/particulier-espace.html"
                                                >
                                                    Particulier
                                                </a>
                                                <div className="dropdown-smenu  secondOnglet  col5">
                                                    <div className="leftPart">
                                                        <ul>
                                                            <li>
                                                                <a href="/portail/home/services-a-la-personne.html">
                                                                    Services à la personne
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/espaces-dedies/le-frontalier-en-suisse.html">
                                                                    Frontalier en Suisse
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/espaces-dedies/beneficiaire-de-la-puma.html">
                                                                    Bénéficiaires de la PUMa
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/espaces-dedies/activites-relevant-de-leconomie.html">
                                                                    Activités relevant de léconomie collaborative
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="/portail/home/outre-mer/particulier-employeur.html">
                                                                    Particulier employeur de lOutre-mer
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="/portail/home/decouvrir-lurssaf.html">
                                                    Découvrir lUrssaf
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="clear" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <h1>HELLO</h1>
        </Fragment>
    );
}

export default Home;
