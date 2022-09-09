package dashboardsdto

type DashboardResponse struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Address    string `json:"address"`
	Postcode string `json:"postcode"`
	Orderan string `json:"orderan"`
	Status string `json:"status"`


}