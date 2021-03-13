import { Dashboard } from '../models';

export class ApiService {
  constructor(private readonly url: string) {}

  getDashboards(): Promise<Dashboard[]> {
    return fetch(this.url).then((res) => res.json());
  }

  createContent(text: string, dashboardId: string) {
    return fetch(`${this.url}/${dashboardId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ text: text }),
    }).then((res) => res.json());
  }

  createDashboard(name: string) {
    return fetch(`${this.url}/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    }).then((res) => res.json());
  }

  deleteContent(contentId: string, dashboardId: string) {
    return fetch(`${this.url}/${dashboardId}/${contentId}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  }

  deleteDashboard(dashboardId: string) {
    return fetch(`${this.url}/${dashboardId}`, {
      method: 'DELETE',
    }).then((res) => res.json());
  }

  moveDashboard(dashboardId: string, position: number): Promise<Dashboard[]> {
    return fetch(`${this.url}/${dashboardId}/move`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ position: position }),
    }).then((res) => res.json());
  }

  moveContent(
    srcDashboardId: string,
    contentId: string,
    destDashboardId: string,
    position: number
  ): Promise<Dashboard[]> {
    return fetch(`${this.url}/${srcDashboardId}/${contentId}/move`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ position: position, dashboardId: destDashboardId }),
    }).then((res) => res.json());
  }
}
