package com.weirdfood.weirdfood.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.weirdfood.weirdfood.Model.ComidasModel;
import com.weirdfood.weirdfood.Model.MenuModel;
import com.weirdfood.weirdfood.Services.ComidasServices;
import com.weirdfood.weirdfood.Services.MenuServices;

@RestController
public class MenuController {
    @GetMapping("/menu/all")
    public List<MenuModel> ObtenerMenus(){
        return new MenuServices().ObtenerMenus();
    }

    @GetMapping("/platillo/all")
    public List<ComidasModel> ObtenerPlatillo(){
        return new ComidasServices().ObtenerPlatillo();
    }
}
