package routes

import (
	"github.com/gorilla/mux"
)

func RouteInit(r *mux.Router) {
	DashboardRoutes(r)
	ProductRoutes(r)
	AuthRoutes(r)
	UserRoutes(r)
}
