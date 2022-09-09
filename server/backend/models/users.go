package models



type Users struct {
	ID        int                   `json:"id"`
	Name      string                `json:"name" gorm:"type: varchar(255)"`
	Email     string                `json:"email" gorm:"type: varchar(255)"`
	Password  string                `json:"-" gorm:"type: varchar(255)"`
	
}

type UsersProfileResponse struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

func (UsersProfileResponse) TableName() string {
	return "users"
}