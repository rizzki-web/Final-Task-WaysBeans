package models

import "time"

type Products struct {
	ID         int                  `json:"id" gorm:"primary_key:auto_increment"`
	Name       string               `json:"name" form:"name" gorm:"type: varchar(255)"`
	Description       string               `json:"description" gorm:"type:text" form:"desc"`
	Price      int                  `json:"price" form:"price" gorm:"type: int"`
	Image      string               `json:"image" form:"image" gorm:"type: varchar(255)"`
	Stock        int                  `json:"stock" form:"stock"`
	UserID     int                  `json:"-" form:"-"`
	User       UsersProfileResponse `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	CreatedAt  time.Time            `json:"-"`
	UpdatedAt  time.Time            `json:"-"`
}

type ProductResponse struct {
	ID         int                  `json:"id"`
	Name       string               `json:"name"`
	Description       string               `json:"description"`
	Price      int                  `json:"price"`
	Image      string               `json:"image"`
	Stock        int                  `json:"stock"`
	UserID     int                  `json:"-"`
	User       UsersProfileResponse `json:"user"`
}

type ProductUserResponse struct {
	ID     int    `json:"id"`
	Name   string `json:"name"`
	Desc   string `json:"desc"`
	Price  int    `json:"price"`
	Image  string `json:"image"`
	Stock    int    `json:"stock"`
	UserID int    `json:"-"`
	User UsersProfileResponse	`json:"user"`
}

func (ProductResponse) TableName() string {
	return "products"
}

func (ProductUserResponse) TableName() string {
	return "products"
}