import { render, screen, fireEvent } from "@testing-library/react";
import Zertifikate from "./Zertifikate";
import ThemeContext from "../contexts/ThemeContext";
import '@testing-library/jest-dom';

describe("Zertifikate Component", () => {
    function renderWithTheme(ui, { theme = "light" } = {}) {
        return render(
            <ThemeContext.Provider value={{ theme }}>
                {ui}
            </ThemeContext.Provider>
        );
    }

    test("zeigt den Titel an", () => {
        renderWithTheme(<Zertifikate titel="Mein Zertifikat" bilder={[]} />);

        expect(screen.getByText("Mein Zertifikat")).toBeInTheDocument();
    });

    test("rendert alle Bilder aus props", () => {
        const bilder = ["bild1.png", "bild2.png"];

        renderWithTheme(<Zertifikate titel="Test" bilder={bilder} />);

        const imgs = screen.getAllByRole("img");
        expect(imgs).toHaveLength(2);
        expect(imgs[0]).toHaveAttribute("src", "bild1.png");
    });

    test("ruft window.print() auf, wenn der Button geklickt wird", () => {
        window.print = jest.fn();


        renderWithTheme(
            <Zertifikate titel="Drucktest" bilder={[]} />
        );

        const button = screen.getByRole("button", { name: /drucken/i });

        fireEvent.click(button);

        expect(window.print).toHaveBeenCalledTimes(1);
    });

    test("nutzt den ThemeContext korrekt", () => {
        renderWithTheme(
            <Zertifikate titel="Themetest" bilder={[]} />,
            { theme: "dark" }
        );

        expect(screen.getByText("Themetest")).toBeInTheDocument();
    });
});
