import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "../../lib/utils";

const THEMES = { light: "", dark: ".dark" };

const ChartContext = React.createContext(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

const ChartContainer = React.forwardRef(
  ({ id, className, children, config, ...props }, ref) => {
    const uniqueId = React.useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

    return (
      <ChartContext.Provider value={{ config }}>
        <div
          ref={ref}
          data-chart={chartId}
          className={cn(
            "flex aspect-video justify-center text-xs [&_.recharts-layer]:outline-none [&_.recharts-surface]:outline-none",
            className,
          )}
          {...props}
        >
          <ChartStyle id={chartId} config={config} />
          <RechartsPrimitive.ResponsiveContainer>
            {children}
          </RechartsPrimitive.ResponsiveContainer>
        </div>
      </ChartContext.Provider>
    );
  },
);
ChartContainer.displayName = "ChartContainer";

const ChartStyle = ({ id, config }) => {
  if (!config) return null;

  const entries = Object.entries(config);

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${entries
  .map(([key, item]) => (item?.color ? `--color-${key}: ${item.color};` : ""))
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef(
  ({ active, payload, className }, ref) => {
    const { config } = useChart();

    if (!active || !payload?.length) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {payload.map((item) => {
          const itemConfig = config?.[item.dataKey] || {};

          return (
            <div key={item.dataKey} className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 rounded"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-muted-foreground">
                {itemConfig.label || item.name}
              </span>
              <span className="ml-auto font-mono">
                {item.value?.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltipContent";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef(({ payload, className }, ref) => {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <div ref={ref} className={cn("flex justify-center gap-4 pt-3", className)}>
      {payload.map((item) => {
        const itemConfig = config?.[item.dataKey] || {};

        return (
          <div key={item.value} className="flex items-center gap-1.5">
            <div
              className="h-2 w-2 rounded"
              style={{ backgroundColor: item.color }}
            />
            {itemConfig.label || item.value}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
