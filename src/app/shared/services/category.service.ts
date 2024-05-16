import { Injectable } from '@angular/core';
import { ApiService } from '@shared/api.service';
import { Method } from '@interfaces/methods.enum';
import { Controller } from '@interfaces/controller.enum';
import { CategoryEndpoint } from '@interfaces/category.enum';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private readonly apiService: ApiService) {}

  getAllCategories() {
    return this.apiService.apiProxyRequest({
      method: Method.GET,
      controller: Controller.CATEGORY,
      action: CategoryEndpoint.GET_ALL
    });
  }
}
