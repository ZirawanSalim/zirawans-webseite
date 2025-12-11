import contactReducer, { initialState } from "./contactReducer";
import * as contactSchemaModule from "../schemas/contactSchema"; // Import des Moduls


const mockContactSchema = {
    validateSync: jest.fn(),
};


jest.spyOn(contactSchemaModule, 'default', 'get').mockReturnValue(mockContactSchema);


describe('contactReducer', () => {

    test('soll den initialen Zustand zurückgeben', () => {

        const state = contactReducer(undefined, { type: 'validate' });

        expect(state.name).toBe('');
        expect(state.email).toBe('');
        expect(state.isValid).toBe(false);
    });

    test('soll den Zustand auf initialState zurücksetzen, wenn die Action "reset" ist', () => {
        const currentState = {
            ...initialState,
            name: "Hans",
            isValid: true,
        };

        const newState = contactReducer(currentState, { type: 'reset' });

        expect(newState).toEqual(initialState);
    });

    test('soll das Feld aktualisieren und isValid auf true setzen, wenn die Validierung erfolgreich ist', () => {
        mockContactSchema.validateSync.mockReturnValue(true);

        const action = {
            type: "updateName",
            field: "name",
            payload: "Max Mustermann",
        };

        const newState = contactReducer(initialState, action);

        expect(newState.name).toBe("Max Mustermann");
        expect(newState.isValid).toBe(true);

        expect(newState.errors.name).toBe("");
    });

    test('soll das Feld aktualisieren, isValid auf false setzen und Fehler anzeigen, wenn Validierung fehlschlägt', () => {
        const mockError = {
            inner: [
                { path: 'name', message: 'Der Name ist erforderlich' },
                { path: 'email', message: 'Ungültige E-Mail' },
            ],
        };

        mockContactSchema.validateSync.mockImplementation(() => {
            throw mockError;
        });


        const action = {
            type: "updateName",
            field: "name",
            payload: "",
        };

        const newState = contactReducer(initialState, action);


        expect(newState.name).toBe("");
        expect(newState.isValid).toBe(false);
        expect(newState.errors.name).toBe("Der Name ist erforderlich");
        expect(newState.errors.email).toBe("Ungültige E-Mail");
        expect(newState.errors.nachricht).toBe("");
    });

    test('soll den Zustand validieren und isValid entsprechend setzen (hier: Fehler)', () => {
        const mockError = {
            inner: [{ path: 'email', message: 'E-Mail fehlt' }],
        };


        mockContactSchema.validateSync.mockImplementation(() => {
            throw mockError;
        });

        const newState = contactReducer(initialState, { type: 'validate' });
        expect(newState.isValid).toBe(false);
        expect(newState.errors.email).toBe("E-Mail fehlt");
    });
});