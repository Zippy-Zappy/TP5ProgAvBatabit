import "../styles/styles.css"

export const Header = () => {
    return (
        <>
        <header className="relative grid flex-col justify-center w-full min-w-[320px] h-[334px] text-center bg-gradient-to-br from-[#282623] to-[#F7931A]">
            <img src="batabit/src/assets/imgs/logo.svg" alt="Logo de Batabit"/><div className="header--title-container">
                <h1>La próxima revolución en el intercambio de criptomonedas</h1>
                <p>Batabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
                <select id="ddlPlanes" name="ddlPlanes" className="header--button">
                    <option value="base" disabled selected>Conoce nuestros planes</option>
                    <option value="plan1" href="/">Plan 1</option>
                    <option value="plan2">Plan 2</option>
                    <option value="plan3">Plan 3</option>
                </select>
            </div>

        </header>
        </>
    )
}