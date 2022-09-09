package repositories

import (
	"waysbeans/models"

	"gorm.io/gorm"
)

type AuthRepository interface {
	Register(user models.Users) (models.Users, error)
	Login(email string) (models.Users, error)
}

func RepositoryAuth(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) Register(user models.Users) (models.Users, error) {
	err := r.db.Create(&user).Error

	return user, err
}

func (r *repository) Login(email string) (models.Users, error) {
	var user models.Users
	err := r.db.First(&user, "email=?", email).Error

	return user, err
}