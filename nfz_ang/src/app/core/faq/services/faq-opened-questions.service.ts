import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable()
export class FaqOpenedQuestionsService {
  private readonly _openedQuestion: WritableSignal<string> = signal(null);
  public readonly openedQuestion: Signal<string> = this._openedQuestion.asReadonly();

  public openQuestion(question: string): void {
    this._openedQuestion.set(question)
  }
}