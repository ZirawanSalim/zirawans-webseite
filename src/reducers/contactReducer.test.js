import contactReducer, { initialState } from "./contactReducer";
import contactSchema from "../schemas/contactSchema";

jest.mock("../schemas/contactSchema", () => ({
    __esModule: true,
    default: {
        validateSync: jest.fn(),
    },
}));
    
describe('contactReducer', () => {

    beforeEach(() => {
       
        contactSchema.validateSync.mockImplementation(() => {
            throw { inner: [] };
        });
    });

    test('soll den initialen Zustand zurückgeben', () => {
        const state = contactReducer(undefined, { type: 'validate' });

        expect(state.name).toBe('');
        expect(state.email).toBe('');
        expect(state.isValid).toBe(false);
    });


    test('soll auf initialState zurücksetzen', () => {
        const currentState = {
            ...initialState,
            name: "Hans",
            isValid: true,
        };

        const newState = contactReducer(currentState, { type: 'reset' });

        expect(newState).toEqual(initialState);
    });

    test('Validierung erfolgreich → isValid = true', () => {
        contactSchema.validateSync.mockReturnValue(true);

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

    test('Validierung fehlschlägt → Fehler anzeigen', () => {
        const mockError = {
            inner: [
                { path: 'name', message: 'Der Name ist erforderlich' },
                { path: 'email', message: 'Ungültige E-Mail' },
            ],
        };

        contactSchema.validateSync.mockImplementation(() => {
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

    test('validate Action → Fehler setzen', () => {
        const mockError = {
            inner: [{ path: 'email', message: 'E-Mail fehlt' }],
        };

        contactSchema.validateSync.mockImplementation(() => {
            throw mockError;
        });

        const newState = contactReducer(initialState, { type: 'validate' });

        expect(newState.isValid).toBe(false);
        expect(newState.errors.email).toBe("E-Mail fehlt");
    });
});
