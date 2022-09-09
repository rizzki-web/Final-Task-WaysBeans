package repositories

import (
	"waysbeans/models"

	"gorm.io/gorm"
)

type ProductRepository interface {
	FindProducts() ([]models.Products, error)
	GetProduct(ID int) (models.Products, error)
	CreateProduct(product models.Products) (models.Products, error)
}

func RepositoryProduct(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindProducts() ([]models.Products, error) {
	var products []models.Products
	err := r.db.Preload("User").Find(&products).Error

	return products, err
}

func (r *repository) GetProduct(ID int) (models.Products, error) {
	var product models.Products
	// not yet using category relation, cause this step doesnt Belong to Many
	err := r.db.Preload("User").First(&product, ID).Error

	return product, err
}

func (r *repository) CreateProduct(product models.Products) (models.Products, error) {
	err := r.db.Create(&product).Error

	return product, err
}