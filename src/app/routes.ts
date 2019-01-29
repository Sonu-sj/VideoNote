import {Route} from '@angular/router';
import {SidebarComponent} from '../app/components/sidebar/sidebar.component'
import {NotebookComponent} from '../app/components/notebook/notebook.component'
import {PageDataComponent} from '../app/components/page-data/page-data.component'
export const routes: Route[] = [{
  path: 'notes/:id',
  component:SidebarComponent,
  children:[
    {
      path:'pages',
      component:NotebookComponent,
      children: [
        {
          path: ':id',
          component: PageDataComponent
        },

      ]
    },
    {
      path: '**',
      redirectTo:'pages/1',
      pathMatch:'full'
    }
  ],
},
 {
  path: '',
  pathMatch: 'full',
  redirectTo: 'notes/1'
}];
