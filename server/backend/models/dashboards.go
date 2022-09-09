package models


// User model struct
type Dashboards struct {
	ID        int       `json:"id"`
	Name      string    `json:"name" gorm:"type: varchar(255)"`
	Address     string    `json:"address" gorm:"type: varchar(255)"`
	Postcode  string    `json:"postcode" gorm:"type: varchar(255)"`
	Orderan string    `json:"orderan" gorm:"type: varchar(255)"`
	Status string    `json:"status" gorm:"type: varchar(255)"`
}