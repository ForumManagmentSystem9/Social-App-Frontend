import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { FilterService } from 'primeng/api';
import { ButtonDirective } from 'primeng/button';
import { Avatar } from 'primeng/avatar';
import {NgClass, NgTemplateOutlet} from '@angular/common';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

interface SearchItem {
  label: string;
  value: string;
  type: 'tag' | 'member' | 'post';
}

interface SearchGroup {
  label: string;
  value: string;
  items: SearchItem[];
}

@Component({
  selector: 'app-nav-component',
  standalone: true,
  imports: [
    AutoCompleteModule,
    FormsModule,
    ButtonDirective,
    Avatar,
    NgClass,
    NgTemplateOutlet
  ],
  providers: [FilterService],
  templateUrl: './nav-component.html'
})
export class NavComponent implements OnInit {

  constructor(
    public sidebar: SidebarService,
    private filterService: FilterService
  ) {}

  showMobileSearch = false;
  searchValue: any;
  filteredGroups: SearchGroup[] = [];
  groupedSearchOptions: SearchGroup[] = [];

  sharedPanelBase = `
    !bg-[#111113] !border !border-zinc-800 !rounded-2xl
    !p-2 !mt-2 !shadow-2xl !shadow-black/80 !overflow-hidden
    [&_.p-autocomplete-items]:!p-0
    [&_.p-autocomplete-items]:!m-0
    [&_.p-autocomplete-item-group]:!p-0
    [&_.p-autocomplete-item-group]:!bg-transparent
    [&_.p-autocomplete-item]:!p-0
    [&_.p-autocomplete-item]:!m-0
    [&_.p-autocomplete-item]:!rounded-xl
    [&_.p-autocomplete-item]:!bg-transparent
    [&_.p-autocomplete-item:hover]:!bg-zinc-800/60
    [&_.p-autocomplete-item.p-highlight]:!bg-zinc-800/60
  `;

  desktopPanelClass = this.sharedPanelBase + `
    [&_.p-autocomplete-items-wrapper]:!max-h-[50vh]
    [&_.p-autocomplete-items-wrapper]:!overflow-y-auto
  `;

  mobilePanelClass = this.sharedPanelBase + `
    [&_.p-autocomplete-items-wrapper]:!max-h-[65vh]
    [&_.p-autocomplete-items-wrapper]:!overflow-y-auto
  `;

  ngOnInit() {
    this.groupedSearchOptions = [
      {
        label: 'Tags',
        value: 'tags',
        items: [
          { label: '#music',  value: 'music',  type: 'tag' },
          { label: '#gaming', value: 'gaming', type: 'tag' },
          { label: '#travel', value: 'travel', type: 'tag' },
          { label: '#coding', value: 'coding', type: 'tag' }
        ]
      },
      {
        label: 'Members',
        value: 'members',
        items: [
          { label: 'John Doe',   value: 'john',  type: 'member' },
          { label: 'Emily Rose', value: 'emily', type: 'member' },
          { label: 'Mark Smith', value: 'mark',  type: 'member' }
        ]
      },
      {
        label: 'Posts',
        value: 'posts',
        items: [
          { label: 'How to learn Angular',     value: 'angular-post', type: 'post' },
          { label: 'Best travel destinations', value: 'travel-post',  type: 'post' },
          { label: 'Gaming setup 2024',        value: 'gaming-post',  type: 'post' }
        ]
      }
    ];
  }

  filterSearch(event: AutoCompleteCompleteEvent) {
    const query = event.query.toLowerCase();
    const filtered: SearchGroup[] = [];

    for (const group of this.groupedSearchOptions) {
      const filteredItems = this.filterService.filter(
        group.items,
        ['label'],
        query,
        'contains'
      ) as SearchItem[];

      if (filteredItems.length > 0) {
        filtered.push({
          label: group.label,
          value: group.value,
          items: filteredItems
        });
      }
    }

    this.filteredGroups = filtered;
  }

  onSelect(event: any) {
    console.log('Selected:', event.value);
    this.showMobileSearch = false;
  }

  toggleMenu() {
    this.sidebar.toggle();
  }

  toggleMobileSearch() {
    this.showMobileSearch = !this.showMobileSearch;
  }

  getItemIcon(type: string): { bg: string; icon: string; color: string; shape: string } {
    switch (type) {
      case 'tag':    return { bg: 'bg-cyan-500/10',   icon: 'pi-hashtag', color: 'text-cyan-400',   shape: 'rounded-lg' };
      case 'member': return { bg: 'bg-pink-500/10',   icon: 'pi-user',    color: 'text-pink-400',   shape: 'rounded-full' };
      case 'post':   return { bg: 'bg-purple-500/10', icon: 'pi-file',    color: 'text-purple-400', shape: 'rounded-lg' };
      default:       return { bg: 'bg-zinc-800',      icon: 'pi-circle',  color: 'text-zinc-400',   shape: 'rounded-lg' };
    }
  }
}
