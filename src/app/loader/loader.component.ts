import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../loader.service';
import { LoaderState } from '../loader-state';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  show: boolean;
  private subscription: Subscription;
  constructor(private loaderService: LoaderService) {
    this.show = false;
  }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState.subscribe((result: LoaderState) => { this.show = result.show; console.log(this.show) });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}