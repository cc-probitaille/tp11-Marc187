export function creerClasseParReflexion(): any {
    const nomClasse = process.env.CLASS_NAME || '';

    if (!nomClasse) {
        throw new Error('CLASS_NAME n’est pas défini dans les variables d’environnement');
    }

    const classeDynamique = class {
        nom: string;

        constructor() {
            this.nom = nomClasse;
        }
    };

    Object.defineProperty(classeDynamique, 'name', { value: nomClasse });

    return new classeDynamique();
}
