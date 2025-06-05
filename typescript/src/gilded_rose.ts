import { Item } from './item';

class GildedRose {
  processEndOfDay(items: Item[]): void {
    for (let i = 0; i < items.length; i++) {
      this.processItemEndOfDay(items[i]);
    }
  }

  private processAgedCheddarEndOfDay(item: Item): void {
    const MAX_QUALITY_THRESHOLD = 50;
    item.daysRemaining = item.daysRemaining - 1;
    item.quality += item.daysRemaining < 0 ? 2 : 1;
    item.quality = Math.min(item.quality, MAX_QUALITY_THRESHOLD);
  }

  private processConcertTicketsEndOfDay(item: Item): void {
    const MAX_QUALITY_THRESHOLD = 50;
    const DAYS_UPPER_BOUND = 10;
    const DAYS_LOWER_BOUND = 5;
    item.daysRemaining -= 1;

    item.quality = [
      DAYS_UPPER_BOUND,
      DAYS_LOWER_BOUND
    ].reduce((accum, bound) => {
      if(item.daysRemaining < bound) {
        accum++;
      }
      return accum;
    }, item.quality + 1)

    if (item.daysRemaining < 0) {
      item.quality = 0;
    }

    item.quality = Math.min(item.quality, MAX_QUALITY_THRESHOLD);
  }

  private processRandomItemEndOfDay(item: Item): void {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }

    item.daysRemaining = item.daysRemaining - 1;

    if (item.daysRemaining < 0) {
      if (item.quality > 0) {
        item.quality = item.quality - 1;
      }
    }
  }

  private processMilkEndOfDay(item: Item): void {
    const MIN_QUALITY_THRESHOLD = 0;
    item.daysRemaining -= 1;
    item.quality -= item.daysRemaining > 0 ? 2 : 4
    item.quality = Math.max(MIN_QUALITY_THRESHOLD, item.quality);
  }

  processItemEndOfDay(item: Item): void {
    switch(item.name) {
      case 'Aged Cheddar':
        this.processAgedCheddarEndOfDay(item);
        return;
      case 'Concert Tickets':
        this.processConcertTicketsEndOfDay(item);
        return;
      case 'Hammer':
        return;
      case 'Milk':
        this.processMilkEndOfDay(item);
        return;
      default:
        this.processRandomItemEndOfDay(item);
      return;
      }
    }
}

export { GildedRose };
