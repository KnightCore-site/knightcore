* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background: #050505;
    color: white;
}


/* GÓRA STRONY */

.hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
    background:
    radial-gradient(circle at top, #242424, #050505 60%);
}


.helmet {
    font-size: 100px;
    animation: float 3s infinite ease-in-out;
}


@keyframes float {

    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }

    100% {
        transform: translateY(0);
    }

}



.hero h1 {
    font-size: 70px;
    margin-top: 20px;
    letter-spacing: 3px;
}


.hero p {
    color: #bdbdbd;
    font-size: 22px;
    margin-top: 15px;
}



/* PRZYCISKI */


.buttons {
    margin-top: 40px;
}


.btn {

    text-decoration: none;
    padding: 15px 35px;
    border-radius: 12px;
    margin: 10px;
    display: inline-block;
    font-weight: bold;
    transition: .3s;

}


.primary {

    background: white;
    color: black;

}


.secondary {

    border: 2px solid white;
    color: white;

}



.btn:hover {

    transform: scale(1.08);

}




/* SEKCJE */


section {

    max-width: 1100px;
    margin: auto;
    padding: 80px 25px;

}


section h2 {

    font-size: 40px;
    margin-bottom: 25px;

}


section p {

    color: #cfcfcf;
    font-size: 18px;
    line-height: 1.7;

}



/* KARTY */


.cards {

    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
    gap: 25px;

}


.card {

    background: #111;
    border: 1px solid #292929;
    padding: 30px;
    border-radius: 18px;
    transition: .3s;

}


.card:hover {

    transform: translateY(-10px);
    border-color: white;

}



.card h3 {

    margin-bottom: 15px;
    font-size: 24px;

}



/* BETA */


.beta {

    text-align: center;

}




/* STOPKA */


footer {

    text-align: center;
    padding: 30px;
    border-top: 1px solid #222;
    color: #777;

}



/* TELEFON */


@media(max-width:700px) {


.hero h1 {

    font-size: 45px;

}


.helmet {

    font-size: 70px;

}


.btn {

    width: 90%;

}

      }
