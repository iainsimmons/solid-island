import { createIsland } from '../../dist/solid-island.es';
import { createSignal } from 'solid-js';
import { Portal } from 'solid-js/web';
import style from './call-to-action.island.css';
import { injectCSS } from './utils';

injectCSS(style);

const Widget = ({ backgroundColor }: { backgroundColor?: string }) => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div>
      <button
        class="cta_button"
        style={{ backgroundColor: backgroundColor }}
        onClick={() => setIsOpen(true)}
      >
        All expenses paid island vacation. Click to enter!
      </button>

      {isOpen() && (
        <Portal mount={document.body}>
          <div
            classList={{ cta__modal: true, 'cta__modal--visible': isOpen() }}
          >
            <img src="https://github.com/mwood23/preact-island/raw/master/docs/preact-island.svg" />
            <p>Portals work with islands too!</p>
            <button class="cta_button" onClick={() => setIsOpen(false)}>
              close
            </button>
          </div>
        </Portal>
      )}
      {isOpen() && (
        <Portal mount={document.body}>
          <div
            classList={{
              'cta__modal-dimmer': true,
              'cta__modal-dimmer--visible': isOpen(),
            }}
            onClick={() => setIsOpen(false)}
          />
        </Portal>
      )}
    </div>
  );
};

const island = createIsland(Widget);
island.render({
  selector: '[data-island="call-to-action"]',
});
