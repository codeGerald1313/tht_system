import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from "vue-toastification";

const toast = useToast();

export const useAuth = defineStore({
    id: 'auth',
    state: () => ({
        token: localStorage.getItem('token') ?? null,
        user: JSON.parse(localStorage.getItem('user') ?? 'null'),
        refreshTokenInterval: 0
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        headers() {
            return {
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token }
            }
        },
        headersMultipart(){
			return {
				headers: { 'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer ' + this.token }
			}
		},
        refreshToken() {
            axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh-token`, null, this.headers())
                .then((response) => {
                    const newToken = response.data.access_token;
                    localStorage.setItem('token', newToken);
                    this.token = newToken;
                })
                .catch((error) => {
                    console.error('Error al actualizar el token:', error);
                });
        },
        startRefreshTokenTimer() {
            // Cancela el temporizador existente si existe
            if (this.refreshTokenInterval !== 0) {
                clearInterval(this.refreshTokenInterval);
            }

            // Establece el intervalo para refrescar el token cada dos días (en milisegundos)
            this.refreshTokenInterval = setInterval(this.refreshToken, 525600 * 60 * 1000); // 1 año en milisegundos
        },
        async login(email, password) {
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { email, password });

                toast.success("Login successful", { timeout: 2000 });

                const token = response.data.access_token;
                const user = response.data.user;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                this.$patch({ token, user });
                this.startRefreshTokenTimer();

            } catch (error) {
                if (error.response && error.response.status === 422) {
                    toast.warning(error.response.data.message);
                } else if (error.response && error.response.status === 400) {
                    toast.warning(error.response.data.message);
                }

                throw error;
            }
        },
        logout() {
            axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`, null, this.headers())
                .then((res) => {
                    if (res.status) {
                        this.token = null;
                        this.user = null;
                        localStorage.removeItem('token');
                        localStorage.removeItem('user');
                        window.location.replace("/");
                    }
                })
                .catch((error) => {
                    console.error('An error occurred while logging out:', error);
                });
        },
        initialize() {
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');

            if (token && user) {
                this.token = token;
                this.user = JSON.parse(user);
            }
            if (this.isAuthenticated) {
                this.startRefreshTokenTimer();
            }
        },
    },
});
