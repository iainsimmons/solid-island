import { createIsland } from '../../dist/solid-island.es';
import { injectCSS } from './utils';
import subscriberStore from './subscriber-store';
import style from './email-subscribe.island.css';

const [subscriber, setSubscriber] = subscriberStore;

injectCSS(style);

const Widget = ({
  showEmail = true,
  showName = true,
}: {
  showEmail: boolean;
  showName: boolean;
}) => {
  return (
    <div class="email__container">
      <p class="email__title">Join our newsletter</p>
      <form
        onSubmit={() => {
          alert(`Submitted with: ${subscriber.name}, ${subscriber.email}`);
        }}
      >
        {showName && (
          <label class="email__input">
            Name
            <input
              name="name"
              onInput={(e: any) => setSubscriber({ name: e.target.value })}
            />
          </label>
        )}

        {showEmail && (
          <label class="email__input">
            Email
            <input
              name="email"
              onInput={(e: any) => setSubscriber({ email: e.target.value })}
            />
          </label>
        )}
        <button class="email__submit">Sign up</button>
      </form>
    </div>
  );
};

const island = createIsland(Widget);
island.render({
  selector: '[data-island="email-subscribe"]',
  propsSelector: '[data-island-props="email-subscribe"]',
});
