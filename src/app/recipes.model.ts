export interface RecipesModel {
	id: number;
	name: string;
	shortDesc: string;
	longDesc?: string;
	image?: string;
	ingredients?: {};
	directions?: string;
}