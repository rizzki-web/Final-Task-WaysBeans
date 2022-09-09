package productsdto

type ProductRequest struct {
	Name        string `json:"name" form:"name" gorm:"type: varchar(255)" validate:"required"`
	Description string `json:"description" gorm:"type:text" form:"desc" validate:"required"`
	Price       int    `json:"price" form:"price" gorm:"type: int" validate:"required"`
	Stock        int    `json:"stock" form:"stock" gorm:"type: int" validate:"required"`
}
