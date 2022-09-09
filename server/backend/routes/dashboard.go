package routes

import (
	"waysbeans/handlers"
	"waysbeans/pkg/mysql"
	"waysbeans/repositories"

	"github.com/gorilla/mux"
)

// Create UserRoutes function here ...
func DashboardRoutes(r *mux.Router) {
	dashboardRepository := repositories.RepositoryDashboard(mysql.DB)
	h := handlers.HandlerDashboard(dashboardRepository)

	r.HandleFunc("/dashboards", h.FindDashboards).Methods("GET")
	r.HandleFunc("/dashboard/{id}", h.GetDashboard).Methods("GET")
}