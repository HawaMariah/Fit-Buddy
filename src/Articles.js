import React from 'react';
import { Link } from 'react-router-dom';

function Articles() {
  return (
  <div className='articles'>
    <div className='articles-container'>
      <h2>Fitness and Styling: Striking the Perfect Balance</h2>
      <p>
        In today's fast-paced world, finding time for fitness can be a challenge.
        However, prioritizing fitness is crucial for maintaining a healthy and balanced lifestyle.
        The good news is that staying fit doesn't mean sacrificing style.
        With a few simple tips, you can effortlessly blend fitness and styling, ensuring you look and feel your best at all times.
      </p>

      <h3>1. Activewear as Everyday Wear</h3>
      <p>
        Gone are the days when activewear was confined to the gym.
        The rise of athleisure has made it acceptable to wear fitness-inspired clothing in everyday settings.
        Opt for stylish yoga pants, chic sports bras, and comfortable sneakers that not only support your workout but also make a fashion statement outside the gym.
      </p>

      <h3>2. Choose Quality Fabrics</h3>
      <p>
        When it comes to fitness clothing, quality matters.
        Invest in activewear made from breathable and moisture-wicking fabrics that keep you comfortable during workouts and prevent unpleasant odors.
        Look for fitness apparel with stretchable and durable materials, ensuring they withstand frequent washes and intense physical activity.
      </p>

      <h3>3. Accessorize Smartly</h3>
      <p>
        Accessories can elevate your fitness look while adding a touch of style.
        Consider adding a sleek fitness tracker to monitor your progress and complete your outfit simultaneously.
        Additionally, a stylish gym bag can be a functional and fashionable accessory to carry your essentials.
      </p>

      <h3>4. Embrace Color</h3>
      <p>
        Ditch the monotonous black and grey workout outfits and embrace vibrant colors.
        Colors not only lift your mood but also make you stand out in the gym or during outdoor activities.
        Mix and match bold hues to create fun and eye-catching fitness ensembles.
      </p>

      <h3>5. Post-Workout Styling</h3>
      <p>
        After an intense workout, freshening up is essential.
        Carry travel-sized beauty products in your gym bag to quickly refresh your face and hair.
        A little touch-up can go a long way in ensuring you look polished and put-together post-workout.
      </p>

      <h3>6. Hair and Makeup</h3>
      <p>
        Keep your hair and makeup routine simple and low-maintenance while working out.
        Tie your hair in a ponytail or a bun to keep it off your face during exercise.
        Opt for minimal makeup, such as a light BB cream, waterproof mascara, and a tinted lip balm, to give your complexion a healthy glow without clogging your pores.
      </p>

      <p>
        Conclusion: Finding the right balance between fitness and styling is achievable with a few adjustments to your wardrobe and beauty routine.
        By incorporating stylish activewear, embracing colors, and accessorizing smartly, you can effortlessly blend fashion and fitness.
        Remember, feeling good about yourself plays a significant role in staying motivated and committed to your fitness journey.
        So, go ahead, dress up for success, and conquer your fitness goals with style!
      </p>

      <Link className='article-link' to="/">Go back to homepage</Link>
    </div>
    </div>
  );
}

export default Articles;
