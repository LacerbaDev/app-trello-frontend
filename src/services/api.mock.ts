import { Dashboard } from '../models';

let dashboards: Dashboard[] = [
  {
    id: 'ckm7nn93h0121r85cfw0k7hvm',
    name: 'Cose da fare',
    position: 0,
    contents: [
      { id: 'ckm7ogrcf06440q5cdy08pzsi', text: 'Fare la spesa', position: 0, dashboardId: 'ckm7nn93h0121r85cfw0k7hvm' },
      { id: 'ckm7ojpvv01604t5cnsnl4k0s', text: 'Riparare il tostapane', position: 1, dashboardId: 'ckm7nn93h0121r85cfw0k7hvm' },
    ],
  },
  {
    id: 'ckm0w9ba50045km5cuwgdw3ee',
    name: 'Cose in progress',
    position: 1,
    contents: [
      { id: 'ckm0w9ba10020km5c44n29xyr', text: 'Portare fuori il cane', position: 0, dashboardId: 'ckm0w9ba50045km5cuwgdw3ee' },
      { id: 'ckm7m3ici0031s65cmyulhp53', text: 'Imparare con i corsi Lacerba', position: 1, dashboardId: 'ckm0w9ba50045km5cuwgdw3ee' },
    ],
  },
  {
    id: 'ckm7of1cc05370q5cq34eqnyj',
    name: 'Cose fatte',
    position: 2,
    contents: [
      { id: 'ckm7ok1cg03314t5cnjvj8s2m', text: 'Prenotare vacanze', position: 0, dashboardId: 'ckm7of1cc05370q5cq34eqnyj' },
    ],
  },
  {
    id: 'ckm7ojxhs03004t5c4r9ffpvj',
    name: 'New Dashboard',
    position: 3,
    contents: [
      { id: 'ckm7ojzpm03154t5cosyq5wwc', text: 'Boh...', position: 0, dashboardId: 'ckm7ojxhs03004t5c4r9ffpvj' },
    ],
  },
];

export class ApiService {
  constructor(private readonly url: string) {}

  async getDashboards(): Promise<Dashboard[]> {
    return JSON.parse(JSON.stringify(dashboards));
  }

  async createContent(text: string, dashboardId: string) {
    const dashboard = dashboards.find((d) => d.id === dashboardId);
    if (dashboard) {
      console.log('adding', text);
      dashboard.contents.push({
        dashboardId: dashboardId,
        id: makeid(40),
        position: dashboard?.contents.length,
        text: text,
      });
    }
    return this.getDashboards();
  }

  createDashboard(name: string) {
    dashboards.push({
      contents: [],
      id: makeid(20),
      name: name,
      position: dashboards.length,
    });
    return this.getDashboards();
  }

  deleteContent(contentId: string, dashboardId: string) {
    const dashboard = dashboards.find((d) => d.id === dashboardId);
    if (dashboard) {
      dashboard.contents = dashboard.contents.filter((c) => c.id !== contentId);
    }
    return this.getDashboards();
  }

  deleteDashboard(dashboardId: string) {
    dashboards = dashboards.filter((d) => d.id !== dashboardId);
    return this.getDashboards();
  }

  moveDashboard(dashboardId: string, position: number): Promise<Dashboard[]> {
    const idx = dashboards.findIndex((d) => d.id === dashboardId);
    if (idx >= 0) {
      const [d] = dashboards.splice(idx, 1);
      dashboards.splice(position, 0, d);
    }
    return this.getDashboards();
  }

  async moveContent(
    srcDashboardId: string,
    contentId: string,
    destDashboardId: string,
    position: number
  ): Promise<Dashboard[]> {
    const srcDashboard = dashboards.find((d) => d.id === srcDashboardId);
    if (!srcDashboard) {
      return this.getDashboards();
    }
    const destDashboard = dashboards.find((d) => d.id === destDashboardId);
    if (!destDashboard) {
      return this.getDashboards();
    }
    const cntIdx = srcDashboard.contents.findIndex((c) => c.id === contentId);
    if (cntIdx === -1) {
      return this.getDashboards();
    }
    const [cnt] = srcDashboard.contents.splice(cntIdx, 1);
    destDashboard.contents.splice(position, 0, cnt);
    return this.getDashboards();
  }
}

function makeid(length: number) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
