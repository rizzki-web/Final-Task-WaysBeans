package repositories

import (
	"waysbeans/models"

	"gorm.io/gorm"
)

// Import "dumbmerch/models", "gorm.io/gorm"

// Declare DashboardRepository interface here ...
type DashboardRepository interface {
	FindDashboards() ([]models.Dashboards, error)
	GetDashboard(ID int) (models.Dashboards, error)
}

// Declare repository struct here ...
type repository struct {
	db *gorm.DB
}

// Create RepositoryDashboard function here ...
func RepositoryDashboard(db *gorm.DB) *repository {
	return &repository{db}
}

// Create FindDashboards method here ...
func (r *repository) FindDashboards() ([]models.Dashboards, error) {
	var dashboards []models.Dashboards
	err := r.db.Raw("SELECT * FROM dashboards").Scan(&dashboards).Error

	return dashboards, err
}

// Create GetDashboard method here ...
func (r *repository) GetDashboard(ID int) (models.Dashboards, error) {
	var dashboard models.Dashboards
	err := r.db.Raw("SELECT * FROM dashboards WHERE id=?", ID).Scan(&dashboard).Error

	return dashboard, err
}