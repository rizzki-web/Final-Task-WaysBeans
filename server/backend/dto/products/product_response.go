package productsdto

type ProductResponse struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Stock    string `json:"stock"`
	Price string `json:"price"`
	Description string `json:"description"`
	Image string `json:"image"`
}