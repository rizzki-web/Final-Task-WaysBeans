package handlers

import (
	dto "waysbeans/dto/result"
	dashboardsdto "waysbeans/dto/dashboards"
	"waysbeans/models"
	"waysbeans/repositories"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

// Declare handler struct here ...
type handler struct {
	DashboardRepository repositories.DashboardRepository
}

// Declare HandlerDashboard function here ...
func HandlerDashboard(DashboardRepository repositories.DashboardRepository) *handler {
	return &handler{DashboardRepository}
}

// Declare FindDashboards method here ...
func (h *handler) FindDashboards(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	dashboards, err := h.DashboardRepository.FindDashboards()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: dashboards}
	json.NewEncoder(w).Encode(response)
}

// Declare GetDashboard method here ...
func (h *handler) GetDashboard(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// convert string id become int id
	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	dashboard, err := h.DashboardRepository.GetDashboard(id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponse(dashboard)}
	json.NewEncoder(w).Encode(response)
}



// Declare convertResponse function here ...
func convertResponse(u models.Dashboards) dashboardsdto.DashboardResponse {
	return dashboardsdto.DashboardResponse{
		ID:   u.ID,
		Name:	u.Name,      
		Address:	u.Address,
		Postcode: u.Postcode,
		Orderan: u.Orderan,
		Status: u.Status,
	}
}