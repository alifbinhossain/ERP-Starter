import * as React from 'react';

import { cn } from '@/lib/utils';

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
	({ className, ...props }, ref) => (
		<div className='relative w-full overflow-auto'>
			<table ref={ref} className={cn('w-full caption-bottom text-sm', className)} {...props} />
		</div>
	)
);
Table.displayName = 'Table';

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
	({ className, ...props }, ref) => (
		<thead
			ref={ref}
			className={cn('select-none bg-base-200 text-sm text-primary [&_tr]:border-b', className)}
			{...props}
		/>
	)
);
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
	({ className, ...props }, ref) => (
		<tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props} />
	)
);
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
	({ className, ...props }, ref) => (
		<tfoot
			ref={ref}
			className={cn(
				'border-t border-secondary/20 bg-neutral-100/50 font-medium dark:bg-neutral-800/50 [&>tr]:last:border-b-0',
				className
			)}
			{...props}
		/>
	)
);
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
	({ className, ...props }, ref) => (
		<tr
			ref={ref}
			className={cn(
				'relative h-12 cursor-pointer text-base transition-colors duration-150 ease-in hover:bg-base-150 focus:bg-base-150 data-[state=selected]:bg-base-300 dark:hover:bg-neutral-800/50 dark:data-[state=selected]:bg-neutral-800',
				className
			)}
			{...props}
		/>
	)
);
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
	({ className, ...props }, ref) => (
		<th
			ref={ref}
			className={cn(
				'space-y-1 whitespace-nowrap px-3 py-2 text-left align-middle text-sm font-medium tracking-wide text-primary first:pl-6 dark:text-neutral-400 [&:has([role=checkbox])]:pr-0',
				className
			)}
			{...props}
		/>
	)
);
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
	({ className, ...props }, ref) => (
		<td
			ref={ref}
			className={cn(
				'group px-3 py-2 text-left align-middle text-sm font-normal tracking-wide text-foreground first:pl-6 [&:has([role=checkbox])]:pr-0',
				className
			)}
			{...props}
		/>
	)
);
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
	({ className, ...props }, ref) => (
		<caption
			ref={ref}
			className={cn('mt-4 text-sm text-neutral-500 dark:text-neutral-400', className)}
			{...props}
		/>
	)
);
TableCaption.displayName = 'TableCaption';

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
