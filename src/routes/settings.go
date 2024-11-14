package routes

import (
	"net/http"

	"goFrame/src/utils"
)

func Settings(w http.ResponseWriter, r *http.Request) {

	data := utils.PageData{
		Title:     "Settings",

	}

	// Render the template
	utils.RenderTemplate(w, data, "settings.html", false)
}
