export default {
    namespaced: true,
    state: {
        courses: [],
        searchedCourses: [],
        serachTerm: "",
    },
    mutations: {
        setCourses(state, payload) {
            state.courses = payload;
        },
        setSearchedCourses(state, payload) {
            state.searchedCourses = payload;
        },
        setSearchTerm(state, payload) {
            state.serachTerm = payload;
        },
        removeCourse(state, courseId) {
            state.courses = state.courses.filter(
                (course) => course.id !== courseId
            );
            state.searchedCourses = state.searchedCourses.filter(
                (course) => course.id !== courseId
            );
        },
    },
    actions: {
        async loadCourses(context) {
            try {
                const response = await fetch("http://localhost:3000/courses");
                if (!response.ok) {
                    throw new Error("Failed to fetch courses");
                }
                const courses = await response.json();
                context.commit("setCourses", courses);
            } catch (error) {
                console.error(error);
            }
        },
        async loadSearchedCourses(context, payload) {
            // try {
            //     const response = await fetch("courses?keyword=nesto.json");
            //     if (!response.ok) {
            //         throw new Error("Failed to fetch courses");
            //     }
            //     const searchedCourses = await response.json();
            //     console.log(searchedCourses);
            //     context.commit("setSearchedCourses", searchedCourses);
            // } catch (error) {
            //     console.error(error);
            // }
            // Ne mogu posto nemam backend. Sad moram filtraciju u memoriji(na frontu)
            const searchTermToFilterBy = payload || localStorage.getItem("q");

            await context.dispatch("loadCourses");
            const allCourses = context.state.courses;
            //All courses je prazan na reload jer nije pozvan nigde akcija za dohvatanje, to bi se izbeglo
            // da imamo api pa da uvek samo dohvatimo sve kurseve, ili samo searchovane

            if (searchTermToFilterBy) {
                const serachedCourses = allCourses.filter((c) => {
                    return c.name
                        .toLowerCase()
                        .includes(searchTermToFilterBy.trim().toLowerCase());
                    //ovde nisam stavio return ...
                });
                context.commit("setSearchedCourses", serachedCourses);
            } else {
                context.commit("setSearchedCourses", allCourses);
            }
        },
        setSearchTerm(context, payload) {
            context.commit("setSearchTerm", payload.searchQuery);
        },
        async getCourse(context, payload) {
            await context.dispatch("loadCourses");
            const allCourses = context.getters["getCourses"];
            if (allCourses) {
                return allCourses.find((c) => {
                    return c.id == payload;
                });
            }
            return null;
        },
        async deleteCourse(context, courseId) {
            // try {
            //     const response = await fetch(
            //         `http://localhost:3000/courses/${courseId}`,
            //         {
            //             method: "DELETE",
            //         }
            //     );
            //     if (!response.ok) {
            //         throw new Error("Failed to delete course");
            //     }
            //     context.commit("removeCourse", courseId);
            // } catch (error) {
            //     console.error(error);
            // }

            console.log("Is akcije: ", courseId);
            context.commit("removeCourse", courseId);
        },
    },
    getters: {
        getCourses(state) {
            return state.courses;
        },
        getSearchedCourses(state) {
            return state.searchedCourses;
        },
        getSearchTerm(state) {
            return state.serachTerm;
        },
    },
};
