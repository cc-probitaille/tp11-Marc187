import { creerClasseParReflexion } from '../reflection';


test('devrait créer une classe dynamiquement en utilisant un nom depuis la variable d’environnement', () => {
    process.env.CLASS_NAME = 'ClasseDynamique';

    const instance = creerClasseParReflexion();
    expect(instance).toBeDefined();
    expect(instance.constructor.name).toBe('ClasseDynamique');
});

test('devrait lancer une erreur si CLASS_NAME n’est pas défini', () => {
    delete process.env.CLASS_NAME;

    expect(() => creerClasseParReflexion()).toThrow('CLASS_NAME n’est pas défini dans les variables d’environnement');
});


