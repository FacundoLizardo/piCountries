import {
	GET_ACTIVITIES,
	GET_COUNTRIES,
	SEARCH_COUNTRIES,
	SEARCH_COUNTRIES_FORM,
	SET_ACTIVITY,
	CLEAR_FORM,
	CLEAR_HOME,
	FILTER_BY_ACTIVITY,
	FILTER_BY_CONTINENT,
	ORDER_AZ,
	ORDER_ZA,
	ORDER_MAY_MEN,
	ORDER_MEN_MAY,
	RESTORE_BUSCADOS,
	RESET_FORM,
} from "../actions/actionTypes";

let initialState = {
	backUpCountries: [],
	countries: [],
	activities: [],
	buscados: [],
	form: [],
};

export function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_COUNTRIES:
			return {
				...state,
				countries: action.payload,
			};

		case SEARCH_COUNTRIES:
			const activitiesSearch = action.payload.map((country) => {
				if (country.Activities.length === 0) return null;
				if (country.Activities.length === 1) {
					return country.Activities;
				}
				if (country.Activities.length > 1) {
					return country.Activities.map((actvt) => actvt);
				}
			});

			const filteredActivities = activitiesSearch.filter((act) => act != null);

			const actividades = [].concat(...filteredActivities);

			if (state.buscados.length === 0) {
				return {
					...state,
					buscados: [...state.buscados, ...action.payload],
					activities: [...state.activities, ...actividades],
				};
			}

			const nuevosPaises = action.payload.filter((nuevoPais) => {
				return !state.buscados.some(
					(paisAcumulado) => paisAcumulado.nombre === nuevoPais.nombre
				);
			});

			return {
				...state,
				buscados: [...state.buscados, ...nuevosPaises],
				activities: [...state.activities, ...actividades],
			};

		case SEARCH_COUNTRIES_FORM:
			if (state.form.length === 0) {
				return {
					...state,
					form: [...state.form, ...action.payload],
				};
			}
			const pasiesForm = action.payload.filter((nuevoPais) => {
				return !state.form.some(
					(paisAcumulado) => paisAcumulado.nombre === nuevoPais.nombre
				);
			});

			return {
				...state,
				form: [...state.form, ...pasiesForm],
			};

		case SET_ACTIVITY:
			const { id, nombre, dificultad, duracion, temporada } = action.payload;
			const actividad = [id, nombre, dificultad, duracion, temporada];
			return {
				...state,
				activities: [...state.activities, action.payload],
			};

		case CLEAR_FORM:
			return {
				...state,
				form: [...action.payload],
			};

		case CLEAR_HOME:
			return {
				...state,
				buscados: action.payload,
			};

		case GET_ACTIVITIES:
			return {
				...state,
				activities: action.payload,
			};

		case FILTER_BY_ACTIVITY:
			if (state.backUpCountries.length === 0) {
				state.backUpCountries = state.buscados;
			}

			const countriesFiltrados = state.buscados.filter((country) => {
				return country.Activities.some(
					(activity) => activity.nombre === action.payload
				);
			});

			return {
				...state,
				buscados: [...countriesFiltrados],
			};

		case FILTER_BY_CONTINENT:
			if (state.backUpCountries.length === 0) {
				state.backUpCountries = state.buscados;
			}

			const objetosFiltrados = state.buscados.filter(
				(objeto) => objeto.continente === action.payload
			);

			return {
				...state,
				buscados: [...objetosFiltrados],
			};

		case RESTORE_BUSCADOS:
			return {
				...state,
				buscados: [...state.backUpCountries],
			};

		case ORDER_AZ:
			const arrayOrdenado = state.buscados.sort((a, b) => {
				const nombreA = a.nombre.toLowerCase();
				const nombreB = b.nombre.toLowerCase();

				if (nombreA < nombreB) {
					return -1;
				}
				if (nombreA > nombreB) {
					return 1;
				}

				return 0;
			});

			return {
				...state,
				buscados: [...arrayOrdenado],
			};

		case ORDER_ZA:
			const arrayOrdenadoZa = state.buscados.sort((a, b) => {
				const nombreA = a.nombre.toLowerCase();
				const nombreB = b.nombre.toLowerCase();

				if (nombreA > nombreB) {
					return -1;
				}
				if (nombreA < nombreB) {
					return 1;
				}

				return 0;
			});

			return {
				...state,
				buscados: [...arrayOrdenadoZa],
			};

		case ORDER_MEN_MAY:
			const arrayOrdenadoMenMay = state.buscados.sort(
				(a, b) => a.poblacion - b.poblacion
			);

			return {
				...state,
				buscados: [...arrayOrdenadoMenMay],
			};
		case ORDER_MAY_MEN:
			const arrayOrdenadoDescendente = state.buscados.sort(
				(a, b) => b.poblacion - a.poblacion
			);
			return {
				...state,
				buscados: [...arrayOrdenadoDescendente],
			};

		case RESET_FORM:
			return {
				...state,
				form: [...action.payload],
			};
		default:
			return { ...state };
	}
}
